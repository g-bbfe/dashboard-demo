<template>
  <div class="app-style">
    <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
          </div>
        </el-col>
      </el-row>
    <div class="main">

      <div class="main-menu">
        <el-menu default-active="3" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark" router>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-submenu class="small-menu" index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
          <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
        </el-menu>
      </div>
      <div class="main-content">
        <el-tabs type="card">
          <el-tab-pane label="表格">
            <el-table
              :data="tableData"
              border
              style="width: 100%"
              :default-sort = "{prop: 'date', order: 'descending'}"
              >
              <el-table-column
                prop="date"
                label="日期"
                sortable
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                sortable
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址"
                :formatter="formatter">
              </el-table-column>
            </el-table>
            <el-button @click="dialogVisible = true" type="primary" icon="search">Yes!</el-button>
          </el-tab-pane>
          <el-tab-pane label="图表">
            <div id="myChart" :style="{width: '500px', height: '300px'}"></div>
          </el-tab-pane>
          <el-tab-pane label="选项">
            <el-radio-group v-model="radioValue">
              <el-radio :label="0">选项1</el-radio>
              <el-radio :label="1">选项2</el-radio>
              <el-radio :label="2">选项3</el-radio>
            </el-radio-group>
            </br>
            <el-autocomplete
              popper-class="my-autocomplete"
              v-model="state3"
              :fetch-suggestions="querySearch"
              custom-item="my-item-zh"
              placeholder="请输入"
              @select="handleSelect"
              icon="edit"
              :on-icon-click="handleIconClick"
            ></el-autocomplete>
          </el-tab-pane>

        </el-tabs>
      </div>
    </div>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      size="tiny">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleOk">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Vue from 'vue';
Vue.component('my-item-zh', {
  functional: true,
  render: function (h, ctx) {
    var item = ctx.props.item;
    return h('li', ctx.data, [
      h('div', { attrs: { class: 'name' } }, [item.value]),
      h('span', { attrs: { class: 'addr' } }, [item.address])
    ]);
  },
  props: {
    item: { type: Object, required: true }
  }
});
export default {
  name: 'Layout',
  data () {
    return {
      isCollapse: true,
      activeIndex: '1',
      activeIndex2: '1',
      radioValue: 1,
      state3: '',
      restaurants: [],
      dialogVisible: false,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎2',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎3',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎4',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    };
  },
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '');
    }
  },
  mounted () {
    this.drawLine();
    this.restaurants = this.loadAll();
  },
  methods: {
    // menu
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleOk (key, path) {
      console.log('点击OK', key, path);
      this.dialogVisible = false;
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },

    // 表格格式化
    formatter (row, colum) {
      return row.address;
    },

    // echarts画图
    drawLine () {
        // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'));
        // 绘制图表
      myChart.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    },
    querySearch (queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter (queryString) {
      return (restaurant) => {
        return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll () {
      return [
        { 'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号' },
        { 'value': 'Hot honey 首尔炸鸡（仙霞路）', 'address': '上海市长宁区淞虹路661号' },
        { 'value': '新旺角茶餐厅', 'address': '上海市普陀区真北路988号创邑金沙谷6号楼113' },
        { 'value': '泷千家(天山西路店)', 'address': '天山西路438号' },
        { 'value': '胖仙女纸杯蛋糕（上海凌空店）', 'address': '上海市长宁区金钟路968号1幢18号楼一层商铺18-101' },
        { 'value': '贡茶', 'address': '上海市长宁区金钟路633号' },
        { 'value': '豪大大香鸡排超级奶爸', 'address': '上海市嘉定区曹安公路曹安路1685号' },
        { 'value': '茶芝兰（奶茶，手抓饼）', 'address': '上海市普陀区同普路1435号' },
        { 'value': '十二泷町', 'address': '上海市北翟路1444弄81号B幢-107' },
        { 'value': '星移浓缩咖啡', 'address': '上海市嘉定区新郁路817号' },
        { 'value': '阿姨奶茶/豪大大', 'address': '嘉定区曹安路1611号' },
        { 'value': '新麦甜四季甜品炸鸡', 'address': '嘉定区曹安公路2383弄55号' },
        { 'value': 'Monica摩托主题咖啡店', 'address': '嘉定区江桥镇曹安公路2409号1F，2383弄62号1F' },
        { 'value': '浮生若茶（凌空soho店）', 'address': '上海长宁区金钟路968号9号楼地下一层' },
        { 'value': 'NONO JUICE  鲜榨果汁', 'address': '上海市长宁区天山西路119号' },
        { 'value': 'CoCo都可(北新泾店）', 'address': '上海市长宁区仙霞西路' },
        { 'value': '快乐柠檬（神州智慧店）', 'address': '上海市长宁区天山西路567号1层R117号店铺' },
        { 'value': 'Merci Paul cafe', 'address': '上海市普陀区光复西路丹巴路28弄6号楼819' },
        { 'value': '猫山王（西郊百联店）', 'address': '上海市长宁区仙霞西路88号第一层G05-F01-1-306' },
        { 'value': '枪会山', 'address': '上海市普陀区棕榈路' },
        { 'value': '纵食', 'address': '元丰天山花园(东门) 双流路267号' },
        { 'value': '钱记', 'address': '上海市长宁区天山西路' },
        { 'value': '壹杯加', 'address': '上海市长宁区通协路' },
        { 'value': '唦哇嘀咖', 'address': '上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元' },
        { 'value': '爱茜茜里(西郊百联)', 'address': '长宁区仙霞西路88号1305室' },
        { 'value': '爱茜茜里(近铁广场)', 'address': '上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺' },
        { 'value': '鲜果榨汁（金沙江路和美广店）', 'address': '普陀区金沙江路2239号金沙和美广场B1-10-6' },
        { 'value': '开心丽果（缤谷店）', 'address': '上海市长宁区威宁路天山路341号' },
        { 'value': '超级鸡车（丰庄路店）', 'address': '上海市嘉定区丰庄路240号' },
        { 'value': '妙生活果园（北新泾店）', 'address': '长宁区新渔路144号' },
        { 'value': '香宜度麻辣香锅', 'address': '长宁区淞虹路148号' },
        { 'value': '凡仔汉堡（老真北路店）', 'address': '上海市普陀区老真北路160号' },
        { 'value': '港式小铺', 'address': '上海市长宁区金钟路968号15楼15-105室' },
        { 'value': '蜀香源麻辣香锅（剑河路店）', 'address': '剑河路443-1' },
        { 'value': '北京饺子馆', 'address': '长宁区北新泾街道天山西路490-1号' },
        { 'value': '饭典*新简餐（凌空SOHO店）', 'address': '上海市长宁区金钟路968号9号楼地下一层9-83室' },
        { 'value': '焦耳·川式快餐（金钟路店）', 'address': '上海市金钟路633号地下一层甲部' },
        { 'value': '动力鸡车', 'address': '长宁区仙霞西路299弄3号101B' },
        { 'value': '浏阳蒸菜', 'address': '天山西路430号' },
        { 'value': '四海游龙（天山西路店）', 'address': '上海市长宁区天山西路' },
        { 'value': '樱花食堂（凌空店）', 'address': '上海市长宁区金钟路968号15楼15-105室' },
        { 'value': '壹分米客家传统调制米粉(天山店)', 'address': '天山西路428号' },
        { 'value': '福荣祥烧腊（平溪路店）', 'address': '上海市长宁区协和路福泉路255弄57-73号' },
        { 'value': '速记黄焖鸡米饭', 'address': '上海市长宁区北新泾街道金钟路180号1层01号摊位' },
        { 'value': '红辣椒麻辣烫', 'address': '上海市长宁区天山西路492号' },
        { 'value': '(小杨生煎)西郊百联餐厅', 'address': '长宁区仙霞西路88号百联2楼' },
        { 'value': '阳阳麻辣烫', 'address': '天山西路389号' },
        { 'value': '南拳妈妈龙虾盖浇饭', 'address': '普陀区金沙江路1699号鑫乐惠美食广场A13' }
      ];
    },
    // 带suggestion的input框
    handleSelect (item) {
      console.log(item);
    },
    handleIconClick (ev) {
      console.log(ev);
    }
  }
};
</script>

<style>
  .el-submenu .small-menu.is-opened .el-menu{
    position: absolute;
    margin-left: 5px;
    top: 0;
    left: 100%;
    z-index: 10;
  }
  @import '../../../static/styles/home.css';
</style>

