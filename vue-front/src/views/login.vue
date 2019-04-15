<template>
    <div class="login-wrap">
        <div class="ms-title">
            <img src="@/assets/img/logo/logo.jpg"><span
            style="margin-left: 10px;font-weight: bold;font-size: 18px">嘿嘿嘿</span></div>
        <div class="ms-login">
            <el-form label-position="left" :model="ruleForm" label-width="100px" :rules="rules" ref="ruleForm">
                <el-form-item label="User Name:" prop="username">
                    <el-input v-model="ruleForm.username" placeholder="Enter username"></el-input>
                </el-form-item>
                <el-form-item label="Password:" prop="password">
                    <input class="el-input__inner" type="password" placeholder="Enter password"
                           v-model="ruleForm.password" v-on:keyup.enter="submitForm('ruleForm')"></input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">Login</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
	import api from '@/../src/api/demoApi'

    export default {
        mounted: function () {
            console.log(localStorage.getItem('token'))
            if (localStorage.getItem('token') != 'undefined') {
                // if(this.$route.fullPath.indexOf("hisTask") !=-1)
                //     this.$router.push({name: 'hisTask', params: {orderID: this.$route.params.orderID}});
                // else
                //     this.$router.push({name: 'curTask', params: {orderID: this.$route.params.orderID}});
            }
        },
        data: function () {
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        {message: 'username', trigger: 'blur'}
                    ],
                    password: [
                        {message: 'password', trigger: 'blur'}
                    ]
                }
            }
        },
        created: function () {

        },
        methods: {
            submitForm(formName) {
                let that = this;
                if (that.ruleForm.username == '' || that.ruleForm.password == '') {
                    this.$message({
                        duration: 1000,
                        message: 'Empty username or password not allowed.',
                        type: 'warning'
                    });
                } else {
					let Base64 = require('js-base64').Base64;
					api.login();
                    // this.$axios.post('http://localhost:8081/mediation/admin/v1/login', {
                    //     userName: Base64.encode(that.ruleForm.username),
                    //     password: Base64.encode(that.ruleForm.password)
                    // })
                    //     .then(function (response) {
                    //         console.log(response.data);
                    //         if (response.data.success == true) {
                    //             localStorage.setItem('ms_username', that.ruleForm.username);
                    //             window.localStorage.setItem('token', response.data.obj)
                    //             if(that.$route.fullPath.indexOf("hisTask") !=-1)
                    //                 that.$router.push({name: 'hisTask', params: {orderID: that.$route.params.orderID}});
                    //             else
                    //                 that.$router.push({name: 'curTask', params: {orderID: that.$route.params.orderID}});
                    //         } else {
                    //             that.$message({
                    //                 duration: 1000,
                    //                 message: response.data.message,
                    //                 type: 'error'
                    //             });
                    //         }
                    //     })
                    //     .catch(function (response) {
                    //         that.$message.error(response);
                    //     });
                }
            },

        }
    }
</script>

<style scoped>
    .login-wrap {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .ms-title {
        position: absolute;
        top: 30%;
        width: 100%;
        margin-top: -210px;
        text-align: center;
        font-size: 30px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ms-login {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 300px;
        margin: -150px 0 0 -190px;
        padding: 40px;
        border-radius: 5px;
        background: #fff;
    }

    .login-btn {
        text-align: center;
    }

    .login-btn button {
        width: 100%;
        height: 36px;
    }
</style>
