{
    // mapped type
    const arrOfNumbers: number[] = [1,2,3,4,5]
    // const arrOfAtring : string[] =['1','2','3','5']
    const arrOfString: string[] = arrOfNumbers.map(number => number.toString())

    console.log(arrOfNumbers);

    type AreaNumber = {
        height:string,
        width: number
    }

    type NumberToString  <t>= {
        [key in keyof t ]:t[key]
    }
    type Hw = {
        height: string
        width: number
    }
    const area1:NumberToString <Hw>= {
        height: '985',
        width: 6598
    }
    console.log(area1);
}