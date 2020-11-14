// 使用Icon的链接方式
Vue.component("link-icon", {
	props: ["href"],
	template: `<span><slot></slot>&nbsp;<a :href="href" title="打开链接" class="link grey"><i class="icon linkify small"></i></a></span>`
})

// 带有下划虚线的连接
Vue.component("link-red", {
	props: ["href", "title"],
	data: function () {
		let href = this.href
		if (href == null) {
			href = ""
		}
		return {
			vHref: href
		}
	},
	methods: {
		clickPrevent: function () {
			emitClick(this, arguments)
		}
	},
	template: `<a :href="vHref" :title="title" style="border-bottom: 1px #db2828 dashed" @click.prevent="clickPrevent"><span class="red"><slot></slot></span></a>`
})

// 会弹出窗口的链接
Vue.component("link-popup", {
	props: ["title"],
	methods: {
		clickPrevent: function () {
			emitClick(this, arguments)
		}
	},
	template: `<a href="" :title="title" @click.prevent="clickPrevent"><slot></slot></a>`
})

// 提交点击事件
function emitClick(obj, arguments) {
	let event = "click"
	let newArgs = [event]
	for (let i = 0; i < arguments.length; i++) {
		newArgs.push(arguments[i])
	}
	obj.$emit.apply(obj, newArgs)
}