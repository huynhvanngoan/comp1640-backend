import { Module } from '@nestjs/common';
import { DepartmentManagerController } from './faculity-manager.controller';
import { DepartmentManagerService } from './faculity-manager.service';

@Module({
  controllers: [DepartmentManagerController],
  providers: [DepartmentManagerService]
})
export class DepartmentManagerModule {}
