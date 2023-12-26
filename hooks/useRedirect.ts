const useRedirect = (link: any, timeout = 0) => {
  if (typeof window !== 'undefined') {
    const router = require('next/router');
    setTimeout(() => {
      router.push(link);
    }, timeout);
  }
};

export default useRedirect;
