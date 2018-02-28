<template>
  <div id="my-clothes">
    <h2>this is my clothes management</h2>

    <div>
      <el-tabs :tab-position="tabPosition" style="height: 2000px;" activeName="second">
        <el-tab-pane label="查看衣柜" name="first">

        </el-tab-pane>
        <el-tab-pane label="新增衣服" name="second">
          <div>
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="衣服名称">
                <el-input maxlength="50" v-model="form.name" clearable></el-input>
              </el-form-item>

              <el-form-item label="衣服种类">
                <el-checkbox-group v-model="form.type">
                  <el-checkbox label="古装" name="type"></el-checkbox>
                  <el-checkbox label="运动服" name="type"></el-checkbox>
                  <el-checkbox label="泳衣" name="type"></el-checkbox>
                  <el-checkbox label="登山服" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="租赁区域">
                <el-cascader  :options="form.regions" change-on-select></el-cascader>
                <!--<el-select v-model="form.region" placeholder="请选择活动区域">-->
                  <!--<el-option label="区域一" value="shanghai"></el-option>-->
                  <!--<el-option label="区域二" value="beijing"></el-option>-->
                <!--</el-select>-->
              </el-form-item>
              <el-form-item label="租赁费用">
                <el-row>
                  <el-input-number v-model="form.fee" @change="handleChange" :min="0" value="0" step="1" label="描述文字"></el-input-number>
                </el-row>
              </el-form-item>
              <el-form-item label="押金费用">
                <el-input-number v-model="form.pledge1" min="0" value="0" step="1"></el-input-number>元/天
              </el-form-item>
              <el-form-item label="衣服描述">
                <el-input type="textarea" autosize="{minRow:1,maxRows:6}"   v-model="form.desc" clearable>
                </el-input>
              </el-form-item>
              <el-form-item label="衣服状态">
                <el-radio-group v-model="form.status">
                  <el-radio label="可租赁"></el-radio>
                  <el-radio label="正在租赁"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button @click="resetForm('form')">重置</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
            <!--<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">-->
              <!--<el-form-item label="衣服名称" prop="name">-->
                <!--<el-input v-model="ruleForm.name"></el-input>-->
              <!--</el-form-item>-->
              <!--<el-form-item label="衣服种类" prop="type">-->
                <!--<el-checkbox-group v-model="ruleForm.type" >-->
                  <!--<el-checkbox label="古装" name="type"></el-checkbox>-->
                  <!--<el-checkbox label="运动服" name="type"></el-checkbox>-->
                  <!--<el-checkbox label="泳衣" name="type"></el-checkbox>-->
                  <!--<el-checkbox label="登山服" name="type"></el-checkbox>-->
                <!--</el-checkbox-group>-->
              <!--</el-form-item>-->
              <!--<el-form-item label="租赁区域" prop="region">-->
                <!--<el-select v-model="ruleForm.region"  placeholder="请选择活动区域">-->
                  <!--<el-option label="区域一" value="shanghai"></el-option>-->
                  <!--<el-option label="区域二" value="beijing"></el-option>-->
                <!--</el-select>-->
              <!--</el-form-item>-->
              <!--<el-form-item label="租赁费用" required>-->
                <!--<el-row>-->
                  <!--<el-form-item prop="fee1">-->
                  <!--按天计费: <el-input-number v-model="ruleForm.fee1" min="0"></el-input-number>元/天-->
                  <!--</el-form-item>-->
                <!--</el-row>-->
                <!--<el-row>-->
                  <!--<el-form-item prop="fee2">-->
                  <!--按小时计费: <el-input-number v-model="ruleForm.fee2" min="0"></el-input-number>元/天-->
                  <!--</el-form-item>-->
                <!--</el-row>-->
              <!--</el-form-item>-->
              <!--<el-form-item label="押金费用" required>-->
                  <!--//step有问题-->
                <!--<el-row>-->
                  <!--<el-form-item prop="pledge1">-->
                    <!--按天计费: <el-input-number v-model="ruleForm.pledge1" min="0" value="0" step="1"></el-input-number>元/天-->
                  <!--</el-form-item>-->
                <!--</el-row>-->
                  <!--<el-row>-->
                    <!--<el-form-item prop="pledge2">-->
                      <!--按小时计费: <el-input-number v-model="ruleForm.pledge2" min="0"></el-input-number>元/天-->
                    <!--</el-form-item>-->
                  <!--</el-row>-->
              <!--</el-form-item>-->
              <!--<el-form-item label="衣服描述" prop="desc">-->
                <!--<el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入衣服描述"></el-input>-->
              <!--</el-form-item>-->
              <!--<el-form-item label="衣服状态" prop="status">-->
                <!--<el-radio v-model="ruleForm.status" label="1">可租赁</el-radio>-->
                <!--<el-radio v-model="ruleForm.status" label="2">正在租赁</el-radio>-->
              <!--</el-form-item>-->
              <!--<el-form-item>-->
                <!--<el-button type="primary" @click="submitFrom('ruleFrom')">立即创建</el-button>-->
                <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
                <!--<el-button>取消</el-button>-->
              <!--</el-form-item>-->
            <!--</el-form>-->
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  export default({
    name:'my-clothes',
    data() {
      return {
        tabPosition:'left',
        form: {
          name: '',
          type:[],
          regions:[{
              vulue:'shanxi',
              label:'山西',
            childern:[{
                  value:'yuncheng',
              label:'运城'
            },
              {
                  value:'taiyuan',
                label:'太原'
              }],
            vulue:'hubei',
            label:'湖北',
            childern:[{
              value:'wuhan',
              label:'武汉'
            },
              {
                value:'huangshi',
                label:'黄石'
              }]
          }],
          fee1:'',
          fee2:'',
          pledge1:'',
          pledge2:'',
          desc: '请输入衣服描述',
          status:'1'
        }
//        rules: {
//          name: [
//            { required: true, message: '请输入衣服名称', trigger: 'blur' },
//            { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' }
//          ],
//          type: [
//            { type: 'array', required: true, message: '请至少选择一个衣服性质', trigger: 'change' }
//          ],
//          region: [
//            { required: true, message: '请选择衣服租赁区域', trigger: 'change' }
//          ],
//          fee1: [
//            { type: 'date', required: true, message: '请输入租金', trigger: 'change' }
//          ],
//          fee2: [
//            { type: 'date', required: true, message: '请输入租金', trigger: 'change' }
//          ],
//          pledge1: [
//            { type: 'date', required: true, message: '请输入租金', trigger: 'change' }
//          ],
//          pledge2: [
//            { type: 'date', required: true, message: '请输入租金', trigger: 'change' }
//          ],
//          desc: [
//            { required: true, message: '请填写活动形式', trigger: 'blur' }
//          ],
//          status: [
//            { required: true, message: '请选择衣服状态', trigger: 'change' }
//          ]
//        }
      };
    },
//    methods: {
//      handleClick(tab, event) {
//        console.log(tab, event);
//      },
//      submitForm(formName) {
//        this.$refs[formName].validate((valid) => {
//          if (valid) {
//            alert('submit!');
//          } else {
//            console.log('error submit!!');
//            return false;
//          }
//        });
//      },
//      resetForm(formName) {
//        this.$refs[formName].resetFields();
//      }
//    }
  })
</script>

<style scoped>
  #home{
    width: 100%;
    height: 500px;
    background-color: khaki;
  }
</style>
