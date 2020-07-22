package step01.exam05;

import java.util.List;

public class Exam08 {

	public static void main(String[] args) {
		
		try {
			BoardDao3 boardDao = null;
			try {
				boardDao = new BoardDao3();
			}catch(Exception e) {}
			
			try {
				boardDao.insert(new Board("aaaa","bbb","1111"));
				boardDao.insert(new Board("aaaa","bbb","1111"));
				boardDao.insert(new Board("aaaa","bbb","1111"));
			}catch(Exception e) {
				System.out.println("입력 오류 발생!");
			}
			boardDao.saveToFile();
			List<Board>list = boardDao.selectList();
			for(Board b : list) {
				System.out.println(b);
			}
		}catch(Exception e) {
			System.out.println("예외가 발생 했습니다.");
		}
		

	}

}
