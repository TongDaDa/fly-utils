
/**
 * @param1 number of Arab type, use it transform to Chinese capital letters.
 * <p>
 *  Founded in Beijing, Use it to convert your Arabic numbers to capital letter.
 *  you
 * </p>
 * exam ⬇️⬇️:
 * transformCapitalNumber(12) ==>  "十二"
 * transformCapitalNumber(580) ==>  "五百八"
 * transformCapitalNumber(1024) ==>  "一千零二十四"
 * transformCapitalNumber(99999) ==>  "九万九千九百九十九"
 * transformCapitalNumber(1345345345345345345) ==>
 * "一百三十四京五千三百四十五兆三千四百五十三亿四千五百三十四万五千三百四十五"
 * */
const transformCapitalNumber = (number,opt) => {
    if (typeof number !== "number") {
        console.error("transformCapitalNumber error for not a number type")
        return;
    }
    const HIGH_NUMBER_UNIT = ["十","百","千","万","亿","兆","京"];
    const SIMPLE = ["零","一","二","三","四","五","六","七","八","九"]
    const CHINESE_NUMBER = ["壹","贰","叁","肆","伍","陆","柒","捌","玖","拾","佰","仟","萬","亿"]
    const PRICE_UNIT = [["角","元","分"],["毛","块","分"]];
    const OTHER_UNIT = ["点"]
    const basicUnits = HIGH_NUMBER_UNIT.slice(0,3);  // three level (basic unit), ten,hundred,thousand
    const dynamicUnits = HIGH_NUMBER_UNIT.slice(3);  // four class (class unit), then thousand, billion, trillion

    let array_numbers = number.toString()
                              .split("")
                              .map(i=> i === '.' ? '.' : Number(i))
                              .reverse();
    const nbLength = array_numbers.length;
    let capitalWord = "";

    /**
     *
     * @param index
     * @return {{unitLevel: string, unitClass: string}}
     */
    const calcIndexToUnit = index => {
        // get level index and class index
        const dynamicUnitIndex = Math.floor(index / 4) - 1,
            basicUnitIndex = index % 4;

        // get level value and class value
        let unitLevel =  dynamicUnits[dynamicUnitIndex],
            unitClass = `${basicUnitIndex !== 0 ? basicUnits[basicUnitIndex-1] : ''}`;

        return {unitLevel,unitClass}
    }

    /**
     * @note: use index judge unit.
     * @name getHighUnit
     * @param index {number}  ArrayNumbers index
     * @return {string} Arabic numbers Unit
     */
    const getHighUnit = (index) => {
        if (index <= 0) return ''
        if (index <= 3) { //get basic unit and return it.
            return HIGH_NUMBER_UNIT[index-1]
        }

        let {unitLevel,unitClass} = calcIndexToUnit(index)

        // get "next index" also get a corresponding value.
        // exam: 1234 --> [1,2,3,4] current index is 3 so nextUnitLevelIndex is 2.
        // note: This queue is the opposite so it's should "index - 1"
        let nextUnitLevel = dynamicUnits[Math.floor((index-1) / 4) - 1]

        // next whether have equally unitLevel value.
        if (unitLevel === nextUnitLevel) { unitLevel = "" }
        return unitClass + unitLevel
    }

    const transformZero = (index) => {
        if (index === 3 || index === 7 || index === 11) return ''
        return calcIndexToUnit(index)["unitLevel"] || ''
    }

    if (nbLength >= 2) {
        let aheadFinish = false;
        /*
        * The i 0 -- nb,length-1 , get back to index different
        * */
        for (let i = nbLength-1; i >= 0; i--) {
            let num = array_numbers[i],
                key = i,
                capitalNumString = '';
            switch (num){
                case '.' : capitalNumString = OTHER_UNIT[0]; key -= 1; break;
                case 0 :
                    const forwardArr = array_numbers.slice(0,i); // return: [start index, ..., arrEnd]
                    // filter and except the 10000 1000 100000
                    // next element is don't zero , because [0,0,0,0] ->> 0
                    if (forwardArr.some((n,k)=> n!==0)) {
                        capitalNumString = SIMPLE[num]
                    } else {
                        if (aheadFinish) break; aheadFinish = true;
                        capitalNumString = transformZero(key); break;
                    }
                default :
                    const HIGH_VALUE = getHighUnit(key);
                    (SIMPLE[num] === "一" && HIGH_VALUE === HIGH_NUMBER_UNIT[0])
                        ? capitalNumString = HIGH_VALUE   // except 一十 that the situation
                        : capitalNumString = SIMPLE[num] + HIGH_VALUE
            }
            capitalWord+=capitalNumString;
        }
        return capitalWord.split("").join("");
    }

    return SIMPLE[number]
}