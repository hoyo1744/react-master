// 3-6
// index.d.ts 파일을 더 확장해야하는 경우에 사용자정의로 만들 수있다. 그게 바로 declaration file임
// https://styled-components.com/docs/api#typescript 참고
// import original module declarations
import 'styled-components';


// 아래의 코드가 의미하는 바는 다음과 같다.
// 1) styled componets의 테마 정의를 확장한다.(덮어씌운다.)
declare module 'styled-components' {
    export interface DefaultTheme {
        textColor: string;
        bgColor: string;
        btnColor: string;
    }
}