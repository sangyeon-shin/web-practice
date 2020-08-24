public class ShapePrinter {
    public void printTriangle(int height) {
        for(int i=1; i<=height; i++) {
        	for(int j=1; j<=i; j++) {
        		System.out.print("*");
        		System.out.print(" ");
        	}
        	System.out.println();
        }
    }
}