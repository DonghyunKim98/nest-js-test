import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Board } from './board.entity';
import { BoardStatus } from './boards-status.enum';
import { BoardsService } from './boards.service';
import { CreateBoardDTO } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get()
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardService.getBoardById(id);
  }

  @Post()
  @UsePipes(ValidationPipe) // CreateBoardDTO class 안에 validation 관련 코드가 들어가 있음
  createBoard(@Body() CreateBoardDTO: CreateBoardDTO): Promise<Board> {
    return this.boardService.createBoard(CreateBoardDTO);
  }

  // @Get()
  // getAllBoards(): Board[] {
  //   return this.boardService.getAllBoards();
  // }

  // @Get('/:id')
  // getBoardByID(@Param('id') id: string): Board {
  //   return this.boardService.getBoardById(id);
  // }

  // @Post()
  // @UsePipes(ValidationPipe)
  // createBoard(@Body() createBoardDTO: CreateBoardDTO): Board {
  //   return this.boardService.createBoard(createBoardDTO);
  // }

  // @Patch('/:id')
  // deleteBoard(@Param('id') id: string): void {
  //   this.boardService.deleteBoard(id);
  // }

  // @Patch(':/id/status')
  // updateBoardStatus(
  //   @Param('id') id: string,
  //   @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  // ) {
  //   this.boardService.updateBoardStatus(id, status);
  // }
}
