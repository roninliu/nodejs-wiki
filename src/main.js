import Vue from 'vue'
import App from './App'
import iView from "iview";
import router from './router'
import 'iview/dist/styles/iview.css'; // 使用 CSS


Vue.config.productionTip = false

Vue.use(iView);

router.beforeEach((to, from, next) => {
	iView.LoadingBar.start();
	next();
});

router.afterEach((to, from, next) => {
	iView.LoadingBar.finish();
});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App)
})