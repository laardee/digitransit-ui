export default class PayloadQueue {
  constructor(interval = 1000) {
    this.queue = [];
    this.interval = interval;
    this.timer = null;
  }

  enqueue(payload) {
    this.queue.push(payload);
    this.startTimer();
  }

  startTimer() {
    if (!this.timer) {
      this.timer = setTimeout(() => this.processQueue(), this.interval);
    }
  }

  async processQueue() {
    if (this.queue.length === 0) {
      this.timer = null;
      return;
    }

    const payloadsToSend = [...this.queue];
    this.queue = [];

    try {
      // const response = await this.sendToBackend(payloadsToSend);
      // console.log(response);

      // eslint-disable-next-line
      console.log('Payloads sent successfully:', payloadsToSend);
    } catch (error) {
      // eslint-disable-next-line
      console.error('Failed to send payloads:', error);
      // Re-add items back to the queue if sending fails
      this.queue.unshift(...payloadsToSend);
    }
    this.timer = null;
    if (this.queue.length > 0) {
      this.startTimer();
    }
  }

  // async sendToBackend(payloads) {
  //   const response = await fetch('TBD', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ data: payloads }),
  //   });
  //   const responseData = await response.json();
  //   return responseData;
  // }
}
