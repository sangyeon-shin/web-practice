public class MarketGood {
    /***********필드값**************/
	private String name;
    private int retailPrice;
    private int discountRate;
    /******************************생성자***********************************/
    public MarketGood() {
    	
    }
    
	public MarketGood(String name, int retailPrice, int discountRate) {
		this.name = name;
		this.retailPrice = retailPrice;
		if (discountRate < 0 || discountRate > 100) {
			discountRate = 0;
		} else {
			this.discountRate = discountRate;
		}
	}
	
	public MarketGood(String name,int retailPrice) {
		this.name = name;
		this.retailPrice = retailPrice;
		this.discountRate = 0;
	}
    /******************************게터세터***************************************/

	public int getDiscountRate() {
		return discountRate;
	}

	public void setDiscountRate(int discountRate) {
		this.discountRate = discountRate;
	}

	public String getName() {
		return name;
	}

	public int getRetailPrice() {
		return retailPrice;
	}
	
	public int getDiscountedPrice() {
		return this.retailPrice - (this.retailPrice*this.discountRate/100);
	}
    /*********************************************************************/
}