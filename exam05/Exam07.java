package step01.exam05;

import java.util.List;

public class Exam07 {

	public static void main(String[] args) {
		try {
			BoardDao2 boardDao = new BoardDao2();
			boardDao.insert(new Board("aaaa", "bbb", "1111"));
			boardDao.insert(new Board("aaaa", "bbb", "1111"));
			boardDao.insert(new Board("aaaa", "bbb", "1111"));
			
			boardDao.saveToFile();
			
			List<Board> list = boardDao.selectList();
			for(Board b : list) {
				System.out.println(b);
			}
			
		}catch(Exception e) {
			System.out.println("예외 발생 ");
		}

	}

}
