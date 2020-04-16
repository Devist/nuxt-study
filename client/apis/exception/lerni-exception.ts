/**
 * Exception 메시지 객체
 * TODO: 해당 객체를 상속받아서 추가적인 CustomException을 만들지 고민해야함.
 * TODO: Notification 삽입 및 보여줄지 말지 결정하는 모드 추가
 */
export class LerniException {
  private code: number = 0
  private message: string = ''

  constructor(code: number, message: string) {
    this.code = code
    this.message = message
  }

  /**
   * Getter $code
   * @return {number }
   */
  public get $code(): number {
    return this.code
  }

  /**
   * Getter $message
   * @return {string }
   */
  public get $message(): string {
    return this.message
  }
}
