
const debounceEvent = (callback, timeout) => {
    let interval;
    return () => {
      clearInterval(interval);
      interval = setTimeout(() => {
        interval = null;
        callback();
      }, timeout);
    }
}

export default debounceEvent;