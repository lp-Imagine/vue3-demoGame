<template>
  <div class="todo-list">
    <div>
      <label for="新增待办" class="todo_label">新增待办</label>
      <input class="todo_ipt" v-model="state.todo" @keyup.enter="handleAddTodo" />
      <button class="todo_add" @click="handleAddTodo">Add</button>
    </div>
    <div>
      <h3 class="todo_label">待办列表({{ todos.length }})</h3>
      <ul>
        <li v-for="item in todos" :key="item.id">
          <div @click="handleChangeStatus(item, true)">
            <input type="checkbox" />
            <label>{{ item.text }}</label>
          </div>
          <span style="cursor: pointer;color:#FF0000" @click="handleDelTodo(item.id)">Delete</span>
        </li>
      </ul>
    </div>
    <div>
      <h3 class="todo_label">已办列表({{ dones.length }})</h3>
    </div>
    <ul>
      <li v-for="item in dones" :key="item.id" @click="handleChangeStatus(item, false)">
        <div>
          <input type="checkbox" checked />
          <label>{{ item.text }}</label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
export default {
  name: 'todoList',
  setup() {
    const state = reactive({
      todoList: [
        {
          id: 1,
          done: false,
          text: '待办一'
        },
        {
          id: 2,
          done: false,
          text: '待办二'
        },
        {
          id: 3,
          done: false,
          text: '待办三'
        }
      ],
      todo: ''
    });

    // 使用计算属性生成待办列表
    const todos = computed(() => {
      return state.todoList.filter(item => !item.done);
    });

    // 使用计算属性生成已办列表
    const dones = computed(() => {
      return state.todoList.filter(item => item.done);
    });

    // 修改待办状态
    const handleChangeStatus = (item, status) => {
      item.done = status;
    };

    // 新增待办
    const handleAddTodo = () => {
      if (!state.todo) {
        alert('请输入待办事项');
        return;
      }
      state.todoList.push({
        text: state.todo,
        id: Date.now(),
        done: false
      });
      state.todo = '';
    };
    // 删除待办
    const handleDelTodo = id => {
      let index = state.todoList.findIndex(item => item.id === id);
      state.todoList.splice(index, 1);
    };

    return {
      state,
      todos,
      dones,
      handleChangeStatus,
      handleAddTodo,
      handleDelTodo
    };
  }
};
</script>

<style scoped>
.todo-list {
  text-align: center;
  width: 400px;
  margin: 0 auto;
}
.todo-list .todo_ipt {
  height: 25px;
  border: 2px solid #0099ff;
  border-radius: 5px;
  width: 250px;
}
.todo-list .todo_label {
  font-size: 14px;
  color: #0099ff;
  font-weight: bold;
  margin-right: 15px;
}
.todo-list .todo_add {
  width: 60px;
  height: 30px;
  line-height: 30px;
  background-color: #0099ff;
  border: 1px solid #0099ff;
  border-radius: 4px;
  margin-left: 10px;
  color: #fff;
}

.todo-list ul li {
  list-style: none;
  border: 1px solid #0099ff;
  border-radius: 6px;
  background-color: aliceblue;
  height: 25px;
  line-height: 25px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
}
</style>
