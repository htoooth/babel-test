
const root = 'src'

desc('test1=>empty')
task('test1', {}, () => {
  jake.exec([`npx babel ${root}/test1/src --out-dir dist/test1`], {interactive: true}, () => {
    complete();
  })
})

desc('test2=>env option empty')
task('test2', {}, () => {
  jake.exec([`npx babel ${root}/test2/src --out-dir dist/test2`], {interactive: true},() => {
    complete();
  })
})

desc('test3=>env options list')
task('test3', {}, () => {
  jake.exec([`npx babel ${root}/test3/src --out-dir dist/test3`], {interactive: true}, () => {
    complete();
  })
})

desc('test4=>rumtime option list')
task('test4', {}, () => {
  jake.exec([`npx babel ${root}/test4/src --out-dir dist/test4`], {interactive: true}, () => {
    complete();
  })
})

desc('test5=>other plugin')
task('test5', {}, () => {
  jake.exec([`npx babel ${root}/test5/src --out-dir dist/test5`], {interactive: true}, () => {
    complete();
  })
})