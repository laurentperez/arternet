import java.util.*;
public class Fizz {
	private static List<Integer> ints = new ArrayList();
	public static final class Singleton {
		private static Singleton instance = null;
		private Singleton() {super();}
		public static final Singleton getInstance() {
			if(Singleton.instance == null){
				Singleton.instance = new Singleton();
				return Singleton.instance;
			}
			return Singleton.instance;
		}
	}
	public static class Other {
		private String name = "other";
		public Other(String name){this.name = name;}
		public String hello(){
			return "hello";
		}
		@Override
			public boolean equals(Object obj) {
				if(obj==this){return true;}
				if(obj instanceof Other) {
					Other oz = (Other)obj;
					if(this.name == oz.name) {return true;}
				}
				return false;

			}
	}
	private static Other o1 = new Other("john");
	static {
		ints.add(1);
		ints.add(5);
		ints.add(15);
		ints.add(27);

	}
	public static void main(String args[]) {
		System.out.println(o1.equals(new Other("john")));
		System.out.println(o1.equals(new Other("max")));
		String h = o1.hello();
		for(Integer i : ints) {
			if(i % 5 == 0) {
				System.out.println(h + " " + i);
			}
		}
	}
}
