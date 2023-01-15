import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../boards-status.enum';

export class BoardStatusValidationPipe implements PipeTransform {
  // readonly -> class 외부에서는 접근 가능하나 바꿀수는 없음
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);

    return index !== -1;
  }

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the status options`);
    }

    return value;
  }
}
