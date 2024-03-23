import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {

  create() {
    return 'This action adds a new admin';
  }

  // create(createAdminDto: CreateAdminDto) {
  //   return 'This action adds a new admin';
  // }


  findAll() {
    return `This action returns all admin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

<<<<<<< HEAD
  update(id: number) {
    return `This action updates a #${id} admin`;
  }
=======
  // update(id: number, updateAdminDto: UpdateAdminDto) {
  //   return `This action updates a #${id} admin`;
  // }


  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
