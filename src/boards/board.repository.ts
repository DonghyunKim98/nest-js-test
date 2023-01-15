import { EntityRepository, Repository } from 'typeorm';
import { Board } from './board.entity';
import { BoardStatus } from './boards-status.enum';
import { CreateBoardDTO } from './dto/create-board.dto';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createBoard(createBoardDto: CreateBoardDTO): Promise<Board> {
    const { title, description } = createBoardDto;

    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });

    await this.save(board);
    return board;
  }
}
