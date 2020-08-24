public class ShapePrinter {
	public int Padding(int height) {
		return height*(height+1))/2;
	}
	
	public void printFloydsPyramid(int height) {
		int num = 1;
		
		if (num < 100) {
			for (int i = 1; i <= height; i++) {

				for (int j = 1; j <= i; j++) {
					
					if () {
						System.out.print("   ");
						System.out.print(num);
						
					} else if (num < 100) {
						System.out.print("  ");
						System.out.print(num);

					} else if (num >= 100) {
						System.out.print(" ");
						System.out.print(num);

					}
					num++;
				}
				System.out.println();
			}
		}

	}

}