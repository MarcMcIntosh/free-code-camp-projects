const createAppScript = (src = 'app') => '<script type="text/javascript" charset="utf-8" src="/' + src + '.js"></script>';
const createStylesheets = () => '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Condensed" />';

export { createAppScript, createStylesheets };
