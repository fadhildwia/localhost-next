const extractClasses = (classString: string, extractor: string) => {
  if (!classString) return '';

  const classes = classString.split(' ');
  const temp = classes.filter((className) => className.startsWith(extractor));
  return [...temp].join(' ');
};

export default extractClasses;
