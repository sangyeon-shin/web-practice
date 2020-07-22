package step01.exam05;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.List;

public class BoardDao {
	ArrayList<Board> list = new ArrayList<>();
	
	//예외 발생하면 무조건 보고하기 
	public BoardDao() throws Exception {
		File file = new File("board.dat");
		
		FileInputStream in = new FileInputStream(file);
		ObjectInputStream in2 = new ObjectInputStream(in);
		Board board = null;
		while(true) {
			board = (Board)in2.readObject();
			list.add(board);
		}
	}
	
	//예외가 발생했을 때 무조건 보고하면
	//다음과 같이 메서드를 사용하는 쪽에서도
	//무조건 예외를 처리해야 하는 불편함이 있다.
	void insert(Board board) throws Exception{
		list.add(board);
		saveToFile();
	}
	
	List<Board> selectList(){
		return list;
	}
	
	Board selectOne(int no) {
		if( no >= 0 && no < list.size()) {
			return list.get(no);
		}
		return null;
	}
	int update(Board board) throws Exception {
		if( board.no >= 0 && board.no < list.size()) {
			list.set(board.no, board);
			saveToFile();
			return 1;
		}
		return 0;
	}
	
	int delete(int no)throws Exception {
		if( no >= 0 && no < list.size()) {
			list.remove(no);
			saveToFile();
			return 1;
		}
		return 0;
	}
	
	void saveToFile() throws Exception{
		File file = new File("board.dat");
		FileOutputStream out = new FileOutputStream(file);
		ObjectOutputStream out2 = new ObjectOutputStream(out);
		
			for(Board board: list) {
				out2.writeObject(board);
			}
	}
}















