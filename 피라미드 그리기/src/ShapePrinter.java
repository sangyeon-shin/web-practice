public class ShapePrinter {
    
	public void printPyramid(int height) {
    
		for(int i=1; i<=height; i++) {
			
			for(int j=1; j<= height - i; j++) {
				System.out.print(" ");
			}
			
			for(int j=1; j<= 2 * i - 1; j++) {
				System.out.print("*");
			}
			
			System.out.println();
		}
		
    }
    
}