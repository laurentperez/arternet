import java.util.*;
public class Fizz {
	private static List<Integer> ints = new ArrayList();

	public static void main(String args[]) {
	ints.add(1);
	ints.add(5);
	ints.add(15);
	ints.add(27);
	
	for(Integer i : ints) {
		if(i % 5 == 0) {
	System.out.println(i);
		}
	}
	}
}
