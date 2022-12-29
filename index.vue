<!--
    评论管理
-->
<template>
    <div class="app-container">
        <!-- <HS-table :filterForm="filterForm" :tableConfig="tableConfig" @upDateHeadSearch="upDateHeadSearch">
                <template slot="tableContent" slot-scope="{ tableItem, itemprop }">
                    <el-date-picker
                        v-if="itemprop == 'create_time'"
                        v-model="tableItem.create_time"
                        align="right"
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="选择日期"
                        @change="updateCharge(tableItem)"
                    ></el-date-picker>
                    <div v-if="itemprop == 'theatre_time'" class="theatre-time">
                        <span>{{ tableItem.theatre_time }}秒</span>
                        <i-select
                            v-model="theatreTtime"
                            :list="theatreTimeList"
                            labelName="lable"
                            labelValue="value"
                            @change="updateCharge(tableItem)"
                        ></i-select>
                    </div>
                </template>
            </HS-table> -->
        <TableActions :search="false">
            <el-button type="primary" plain icon="el-icon-plus" size="mini" @click="">添加评论</el-button>
        </TableActions>

        <!-- 剧集弹窗 -->
        <el-dialog
            :title="dialogTitle"
            :visible.sync="dialogOpen"
            :close-on-click-modal="false"
            width="800px"
            append-to-body
        >
            <el-form ref="dialogForm" :model="dialogForm" :rules="dialogRules" label-width="110px">
                <el-form-item label="评论内容" prop="content">
                    <el-input type="textarea" v-model="dialogForm.content"></el-input>
                </el-form-item>
                <el-form-item label="归属地" prop="address">
                    <el-input v-model="dialogForm.address" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="评论日期" prop="create_time">
                    <el-date-picker
                        v-model="dialogForm.create_time"
                        align="right"
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="选择日期"
                    ></el-date-picker>
                </el-form-item>
                <el-form-item label="弹幕时间" prop="theatre_time">
                    <i-select
                        v-model="dialogForm.theatre_time"
                        :list="theatreTimeList"
                        labelName="lable"
                        labelValue="value"
                    ></i-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogOpen = false">取 消</el-button>
                <el-button type="primary" @click="handleSave('dialogForm')">保 存</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import { playletCommentSave, playletCommentList, playletCommentDel } from '@/api/cartoon/comment';
    export default {
        props: [],
        components: {},
        data() {
            return {
                theater_id: '0',
                theater_sub_id: '0',
                tableData: [],
                loading: false,
                total: 0,
                dateForm: {
                    page: 1,
                    page_size: 10,
                },
                theatreTtime: '',
                dialogTitle: '新增评论',
                commentType: 1,
                dialogOpen: false,
                dialogForm: {},
                theatreTimeList: [
                    { lable: '0-30', value: '0' },
                    { lable: '30-60', value: '30' },
                    { lable: '60-90', value: '60' },
                    { lable: '90-120', value: '90' },
                    { lable: '120-150', value: '120' },
                    { lable: '150-180', value: '150' },
                    { lable: '180以上', value: '180' },
                ],
                dialogRules: {
                    content: [{ required: true, message: '评论内容不能为空' }],
                    address: [{ required: true, message: '归属地不能为空' }],
                    create_time: [{ type: 'string', required: true, message: '请选择评论日期', trigger: 'change' }],
                    theatre_time: [{ required: true, message: '请选择弹幕时间', trigger: 'change' }],
                },
            };
        },
        computed: {
            filterForm() {
                return {
                    // form 配置
                    labelWidth: null,
                    headerSearch: false,
                    // 按钮列表
                    formItemBotton: [
                        {
                            id: '1',
                            btnName: '新增',
                            typeBtn: 'primary',
                            plain: true,
                            icon: 'el-icon-plus',
                            size: 'mini',
                            clickFunction: () => {
                                this.dialogForm = {};
                                this.dialogOpen = true;
                                this.$nextTick(() => {
                                    this.$refs['dialogForm'].clearValidate();
                                });
                            },
                        },
                    ],
                };
            },
            tableConfig() {
                return {
                    // 表格配置
                    loading: this.loading,
                    border: true,
                    heights: null,
                    stripe: false,
                    headerCellStyle: { background: '#f7f7f7' },
                    operation: true, //是否展示操作
                    operationLabel: '操作',
                    operationWidth: null, //操作宽度
                    operationFixed: 'right', //定位
                    selection: false, //多选
                    total: this.total, //总条数
                    page: this.dateForm.page,
                    pageSize: this.dateForm.page_size,
                    pagination: (page, pageSize) => {
                        this.dateForm.page = page;
                        this.dateForm.page_size = pageSize;
                        this.getList();
                    },
                    handleSelectionChange: (el) => {},
                    tableHead: [
                        {
                            label: 'ID',
                            prop: 'id',
                            width: 80,
                        },
                        {
                            label: '评论内容',
                            prop: 'content',
                        },
                        {
                            label: '归属地',
                            prop: 'address',
                        },
                        {
                            prop: 'create_time',
                            label: '评论时间',
                            type: 'slot',
                        },
                        {
                            prop: 'theatre_time',
                            label: '弹幕时间',
                            type: 'slot',
                        },
                    ],
                    // 数据请使用 tableList 为名 否则无法排序
                    tableList: this.tableData,
                    columnButton: [
                        {
                            id: '1',
                            btnName: '删除',
                            typeBtn: 'text',
                            plain: false,
                            icon: 'el-icon-delete',
                            size: 'mini',
                            clickFunction: (row) => {
                                this.$confirm(`您确定要删除此评论吗? 是否继续?`, '提示', {
                                    confirmButtonText: '确定',
                                    cancelButtonText: '取消',
                                    type: 'warning',
                                })
                                    .then(() => {
                                        playletCommentDel({ id: row.id }).then((res) => {
                                            if (res.code == 200) {
                                                this.$message.success(res.msg);
                                            } else {
                                                this.$message.error(res.msg);
                                            }
                                            this.getList();
                                        });
                                    })
                                    .catch(() => {});
                            },
                        },
                    ],
                };
            },
        },
        created() {
            this.theater_id = this.$route.query.theater_id || '0';
            this.theater_sub_id = this.$route.query.serial_id || '0';
            this.getList();
        },
        methods: {
            getList() {
                this.loading = true;
                playletCommentList({
                    ...this.dateForm,
                    theater_id: this.theater_id,
                    theater_sub_id: this.theater_sub_id,
                })
                    .then((res) => {
                        if (res.code === 200) {
                            this.tableData = res.data.list;
                            // this.total = parseInt(res.data.total);
                        }
                        this.loading = false;
                    })
                    .catch((err) => {
                        this.loading = false;
                    });
            },

            updateCharge(item) {
                playletCommentSave({
                    ...item,
                    theatre_time: this.theatreTtime,
                    theater_id: this.theater_id,
                    theater_sub_id: this.theater_sub_id,
                }).then((res) => {
                    if (res.code == 200) {
                        this.$message.success(res.msg);
                    } else {
                        this.$message.error(res.msg);
                    }
                    this.theatreTtime = '';
                    this.getList();
                });
            },
            handleSave(form) {
                this.$refs[form].validate((valid) => {
                    if (valid) {
                        this.$confirm(
                            `您确定要${this.commentType == 1 ? '添加' : '编辑'}此评论吗?, 是否继续?`,
                            '提示',
                            {
                                confirmButtonText: '确定',
                                cancelButtonText: '取消',
                                type: 'warning',
                            }
                        )
                            .then(() => {
                                playletCommentSave({
                                    ...this.dialogForm,
                                    theater_id: this.theater_id,
                                    theater_sub_id: this.theater_sub_id,
                                }).then((res) => {
                                    if (res.code == 200) {
                                        this.$message.success(res.msg);
                                    } else {
                                        this.$message.error(res.msg);
                                    }
                                    this.getList();
                                    this.dialogOpen = false;
                                });
                            })
                            .catch(() => {});
                    } else {
                        return false;
                    }
                });
            },
            upDateHeadSearch(val, type) {
                this.dateForm = { ...this.dateForm, ...val };
                this.getList();
            },
        },
    };
</script>

<style lang="scss" scoped>
    .theatre-time {
        display: flex;
        align-items: center;
        & > span {
            width: 50px;
        }
    }
</style>
