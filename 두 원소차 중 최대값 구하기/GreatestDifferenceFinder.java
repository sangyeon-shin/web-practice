public class GreatestDifferenceFinder {

	int greatestDifference(int[] intArray) {

		if (intArray.length < 2) {
			return 0;
		}
		for (int i = 0; i < intArray.length;) {
			if (intArray[i] > intArray[i + 1]) {
				int[] temp = new int[intArray.length];
				for (int j = 0; j < temp.length; j++) {
					temp[j] = intArray[j];
				}
				temp[i] = intArray[i + 1];
				temp[i + 1] = intArray[i];
				intArray = temp;
				i++;
			} else {
				i++;
			}
		}
		return intArray[intArray.length - 1];

	}

}