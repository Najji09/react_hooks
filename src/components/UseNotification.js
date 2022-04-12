const useNotification = (title, options) => {
  //   if (!('Notificaiton' in window)) {
  //     console.log('non');
  //     return;
  //   }
  const fireNotification = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotification;
};

const UseNotification = () => {
  const triggerNotification = useNotification('Can I steal your kimchi?');
  return (
    <div>
      <button onClick={triggerNotification}>Notification</button>
    </div>
  );
};

export default UseNotification;
