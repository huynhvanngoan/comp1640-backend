import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';
import { storageConfig } from 'src/helpers/config.helper';

@Injectable()
export class UploadService {
  // Hàm xử lý upload hình ảnh
  async uploadImage(file: Express.Multer.File): Promise<string> {
    // Kiểm tra định dạng file
    const validImageExtensions = ['.jpg', '.jpeg', '.png'];
    const fileExtension = extname(file.originalname).toLowerCase();
    if (!validImageExtensions.includes(fileExtension)) {
      throw new HttpException(
        'Định dạng file không hợp lệ. Chỉ chấp nhận file JPG, JPEG và PNG.',
        HttpStatus.BAD_REQUEST,
      );
    }

    // Kiểm tra kích thước ảnh
    const maxImageSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxImageSize) {
      throw new HttpException(
        'Kích thước file quá lớn. Kích thước tối đa là 5MB.',
        HttpStatus.BAD_REQUEST,
      );
    }

    // Tạo tên file mới với UUID
    const originalName = file.originalname.split('.')[0];
    const fileNameWithExtension = `${originalName}-${uuidv4()}${fileExtension}`;

    // Xử lý upload hình ảnh (lưu file vào thư mục uploads/images)
    const imagePath = `uploads/images/${fileNameWithExtension}`;
    try {
      await fs.promises.mkdir('uploads/images', { recursive: true });
      await fs.promises.writeFile(imagePath, file.buffer);
    } catch (err) {
      throw new HttpException(
        'Không thể lưu file. Vui lòng thử lại sau.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return imagePath;
  }

  // Hàm xử lý upload tài liệu
  async uploadDocument(file: Express.Multer.File): Promise<string> {
    // Kiểm tra định dạng file
    const validDocumentExtensions = ['.doc', '.docx', '.pdf'];
    const fileExtension = extname(file.originalname).toLowerCase();
    if (!validDocumentExtensions.includes(fileExtension)) {
      throw new HttpException(
        'Định dạng file không hợp lệ. Chỉ chấp nhận file DOC, DOCX và PDF.',
        HttpStatus.BAD_REQUEST,
      );
    }

    // Tạo tên file mới với UUID
    const fileNameWithExtension = `${uuidv4()}${fileExtension}`;

    // Xử lý upload tài liệu (lưu file vào thư mục uploads/documents)
    const documentPath = `uploads/documents/${fileNameWithExtension}`;
    try {
      await fs.promises.mkdir('uploads/documents', { recursive: true });
      await fs.promises.writeFile(documentPath, file.buffer);
    } catch (err) {
      throw new HttpException(
        'Không thể lưu file. Vui lòng thử lại sau.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return documentPath;
  }

  // Validator cho Multer
  imageFileFilter = (
    req: Express.Request,
    file: Express.Multer.File,
    callback: any,
  ) => {
    const validImageExtensions = ['.jpg', '.jpeg', '.png'];
    const fileExtension = extname(file.originalname).toLowerCase();
    if (validImageExtensions.includes(fileExtension)) {
      callback(null, true);
    } else {
      callback(
        new HttpException(
          'Định dạng file không hợp lệ. Chỉ chấp nhận file JPG, JPEG và PNG.',
          HttpStatus.BAD_REQUEST,
        ),
        false,
      );
    }
  };

  // Cấu hình Multer cho upload hình ảnh
  // Cấu hình Multer cho upload hình ảnh
  imageStorage = storageConfig('images');

  // Cấu hình Multer cho upload tài liệu
  documentStorage = storageConfig('documents');
}
