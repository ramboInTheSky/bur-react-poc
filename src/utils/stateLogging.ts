export default (state: any, action: any) => {
    const env = process.env.NODE_ENV;
    if (env !== 'production' && env !== 'test') {
        console.groupCollapsed('%c Application state change', 'color: white; background: black; padding: 2px');
        console.log(`%cAction: ${action.type}`, 'color: purple');
        console.log('%cState: ', 'color: blue', state);
        console.groupEnd();
    }
}