import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { BoardsService } from './boards.service';
import { CreateBoardDTO } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get()
  getAllBoards(): Board[] {
    return this.boardService.getAllBoards();
  }

  @Get('/:id')
  getBoardByID(@Param('id') id: string): Board {
    return this.boardService.getBoardById(id);
  }

  @Post()
  createBoard(@Body() createBoardDTO: CreateBoardDTO): Board {
    return this.boardService.createBoard(createBoardDTO);
  }

  @Patch('/:id')
  deleteBoard(@Param('id') id: string): void {
    this.boardService.deleteBoard(id);
  }

  @Patch(':/id/status')
  updateBoardStatus(
    @Param('id') id: string,
    @Param('status') status: BoardStatus,
  ) {
    this.boardService.updateBoardStatus(id, status);
  }
}
