function createAppScript(src = '/app') {
  return '<script type="text/javascript" charset="utf-8" src="' + src + '.js"></script>';
}

const createStylesheets = () => '';

export { createAppScript, createStylesheets };
