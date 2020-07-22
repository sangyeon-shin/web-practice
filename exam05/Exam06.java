package step01.exam05;

import java.util.List;

public class Exam06 {

	public static void main(String[] args) {
		
		try {
			BoardDao boardDao = new BoardDao();
			
			boardDao.insert(new Board("aaaa", "bbb", "1111"));
			boardDao.insert(new Board("aaaa", "bbb", "1111"));
			boardDao.insert(new Board("aaaa", "bbb", "1111"));
			
			boardDao.saveToFile();
			
			List<Board> list = boardDao.selectList();
			for(Board b : list) {
				System.out.println(b);
			}
		}catch(Exception e) {
			System.out.println("예외가 발생했습니다.\n더 이상 할 일 이 없네요."
					+ "\n그냥 멈추겠습니다.");
		}

	}

}
