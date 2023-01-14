import { IsNotEmpty } from 'class-validator';

export class CreateBoardDTO {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
