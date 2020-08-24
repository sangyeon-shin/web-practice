public class Main {
    public static void main(String[] args) {
        ShapePrinter printer = new ShapePrinter();

        // Å×½ºÆ®
        printer.printTriangle(3);
        System.out.println("----------");
        printer.printTriangle(5);
        System.out.println("----------");
        printer.printTriangle(10);
    }
}