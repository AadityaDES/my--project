
public class patteran {

    public static void main(String[] args) {
        int n = 5;
        for (int i = 1; i <= n; i++) {
            System.out.println(" ".repeat(n - i) + "*".repeat(2 * i - 1));
        }

        for (int i = n - 1; i >= 1; i--) {
            System.out.println(" ".repeat(n - i) + "*".repeat(2 * i - 1));
        }

    }
}