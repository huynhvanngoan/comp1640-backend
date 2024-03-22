import { Injectable } from "@nestjs/common";

        

const IMAGE_MIMETYPES = ['image/jpeg', 'image/png', 'image/jpg'];
const FILE_MIMETYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
@Injectable()
export class UploadService {

    async uploadImage(file: Express.Multer.File): Promise<string>{

    }


}