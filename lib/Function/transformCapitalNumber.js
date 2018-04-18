
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

export default transformCapitalNumber = (number, opt) => {
    if (typeof number !== "number") {
        console.error("transformCapitalNumber error for not a number type")
        return;
    }
    const HIGH_NUMBER_UNIT = ["十","百","千","万","亿","兆","京"];
    const SIMPLE = ["一","二","三","四","五","六","七","八","九"]

    const CHINESE_NUMBER = ["壹","贰","叁","肆","伍","陆","柒","捌","玖","拾","佰","仟","萬","亿"]
    const PRICE_UNIT = [["角","元","分"],["毛","块","分"]];
    const OTHER_UNIT = ["点"]

}