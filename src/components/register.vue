<template>
    <div>注册</div>
    <div>
        <el-form
            ref="formRef"
            :model="form"
            label-width="120px"
            :rules="rulesData"
            class="registerFrom"
        >
            <el-form-item label="用户名称" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="登录密码" prop="userPwd">
                <el-input v-model="form.userPwd"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="rePwd">
                <el-input v-model="form.rePwd"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="poloe">
                <el-input v-model="form.poloe"></el-input>
            </el-form-item>

            <el-form-item label="w type">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="Online activities" name="type"></el-checkbox>
                    <el-checkbox label="Promotion activities" name="type"></el-checkbox>
                    <el-checkbox label="Offline activities" name="type"></el-checkbox>
                    <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="请选择您的性别" prop="resource">
                <el-radio-group v-model="form.resource">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="是否隐藏" prop="delivery">
                <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(formRef)">Create</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup >

import { ref, reactive } from 'vue'

import { apiAxios } from '../assets/js/axios'


defineProps({ msg: String })

const count = ref(0)

const reData = ref()

const formRef = ref()

const rulesData = reactive({
    name: [
        {
            required: true,
            message: 'Please input Activity name',
            trigger: 'blur',
        },
        {
            min: 3,
            max: 5,
            message: 'Length should be 3 to 5',
            trigger: 'blur',
        },
    ],
    userPwd: [
        {
            required: true,
            message: 'Please input Activity name',
            trigger: 'blur',
        },
        {
            min: 3,
            max: 5,
            message: 'Length should be 3 to 5',
            trigger: 'blur',
        },
    ],
    rePwd: [
        {
            required: true,
            message: 'Please input Activity name',
            trigger: 'blur',
        },
        {
            min: 3,
            max: 5,
            message: 'Length should be 3 to 5',
            trigger: 'blur',
        },
    ],
    poloe: [
        {
            required: true,
            message: 'Please input Activity name',
            trigger: 'blur',
        },
        {
            min: 3,
            max: 5,
            message: 'Length should be 3 to 5',
            trigger: 'blur',
        },
    ],
    resource: [
        {
            required: true,
            message: 'Please input Activity name',
            trigger: 'blur',
        },
    ],
    delivery: [
        {
            required: false,
            message: 'Please input Activity name',
            trigger: 'blur',
        },
    ]
})

// do not use same name with ref
const form = reactive({
    name: '',
    region: '',
    userPwd: ref(),
    rePwd: ref(),
    poloe: ref(),
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const onSubmit = () => {
    console.log('submit!')
}

const submitForm = (formEl) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!', form, formRef, form.userPwd)
                (
                    async function () {
                        reData = await apiAxios('POST', '/user/register', {
                            name: form.name,
                            userPwd: form.userPwd,
                            pleno: form.poloe,
                            sex: form.resource,
                            delivery: form.delivery
                        })
                    }
                )
        } else {
            console.log('error submit!')
            return false
        }
    })
}


</script>

<style>
.registerFrom input {
    width: 300px;
}
</style>