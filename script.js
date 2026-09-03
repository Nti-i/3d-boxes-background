const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))
// 按钮 添加事件监听器 当click 就触发boxesContainer的classList切换big类名 
// toggle('big') 方法会在元素的类列表中切换指定的类名，如果该类名存在则移除它，如果不存在则添加它。

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div')
      // 意思再html中创建一个div元素 例如 <div></div> 这个div元素是空的
      box.classList.add('box')
      //此处得看完css文件中.box的样式-------------
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
      // backgroundPosition属性设置或返回背景图像的位置。此处截背景图部分，按照ij区分部位
      // 由于窗口自动截到的是0-125（横向）0-125纵向所以我得自己移动底部图片以截到我想要的图片
      boxesContainer.appendChild(box)
    }
  }
}

createBoxes()
