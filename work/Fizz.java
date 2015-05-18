import java.util.*;
public class Fizz {
	private static List<Integer> ints = new ArrayList();

	public static class Other {
		public String hello(){
		return "hello";
		}
	}
	private static Other o = new Other();
	static {
	ints.add(1);
	ints.add(5);
	ints.add(15);
	ints.add(27);
	
	}
	public static void main(String args[]) {
	String h = o.hello();
		for(Integer i : ints) {
		if(i % 5 == 0) {
	System.out.println(h + " " + i);
		}
	}
	}
}
