import { Console } from "@woowacourse/mission-utils";

export async function getInput(promptMessage) {
  return Console.readLineAsync(promptMessage); // 사용자 입력 받기
}