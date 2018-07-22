<template>
  <div class="content">
    <button class="add-to-cart" @click="addToCart()">Add to cart</button>
    <div class="top-row">
      <!-- <div class="robot-name">
        {{selectedRobot.head.title}}
        <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
      </div> -->
      <PartSelector
        :parts="availableParts.heads"
        position="top" />
    </div>
    <div class="middle-row">
      <PartSelector
        :parts="availableParts.arms"
        position="left" />
      <PartSelector
        :parts="availableParts.torsos"
        position="center" />
      <PartSelector
        :parts="availableParts.arms"
        position="right" />
    </div>
    <div class="bottom-row">
      <PartSelector
        :parts="availableParts.bases"
        position="bottom" />
    </div>
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cart" :key="index">
            <td>{{robot.head.title}}</td>
            <td class="cost">{{robot.cost}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import availableParts from '../data/parts';
import PartSelector from './PartSelector.vue';

export default {
  name: 'RobotBuilder',
  components: { PartSelector },
  created() {
    console.log('created');
  },
  data() {
    return {
      cart: [],
      availableParts,
      selectedRobot: {
        head: {},
        leftArm: {},
        torso: {},
        rightArm: {},
        base: {},
      },
    };
  },
  computed: {
    salesBorderClass() {
      return this.selectedRobot.head.onSale ? 'sales-border' : null;
    },
  },
  methods: {
    addToCart() {
      const robot = this.selectedRobot;
      const cost = robot.head.cost +
        robot.leftArm.cost +
        robot.torso.cost +
        robot.rightArm.cost +
        robot.base.cost;
      this.cart.push(Object.assign(
        {},
        robot,
        {
          cost,
        },
      ));
    },
  },
};
</script>

<style scoped lang="scss">
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;

  img {
    width:165px;
  }
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}

.robot-name {
  position: absolute;
  text-align: center;
  top: -25px;
  width: 100%;;
}

.sale {
  color: red;;
}

.sales-border {
  border-color: red;
}

.content {
  position: relative;
}
</style>
