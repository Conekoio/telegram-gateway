import { apiRoot } from '../utils/constants';
import { ResponseWrapper } from '../types/responses/response-wrapper';

export class HttpWrapper {
  private readonly token: string;

  constructor(token: string) {
    this.token = token;
  }

  public async send<T, R>(url: string, params: T): Promise<R> {
    const result = await fetch(apiRoot + url, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
    });

    try {
      const response = (await result.json()) as ResponseWrapper<R>;
      if (response.ok) {
        return response.result as R;
      }
      throw response.error;
    } catch (e) {
      throw new Error(typeof e === 'string' ? e : (e as Error).message);
    }
  }
}
