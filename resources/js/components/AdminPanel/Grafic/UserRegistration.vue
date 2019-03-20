<template>
    <canvas id="myChart" width="700" height="400"></canvas>
</template>

<script>
    function formatDate(date) {
        let month = (date.getMonth() < 10) ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        return `${date.getFullYear()}-${month}-${date.getDate()}`;
    }

    import Chart from 'chart.js';
    export default {
        name: "UserRegistration",
        data() {
            return {
                chart: '',
                list: '',
                dataToChart: [],
                loading: true,
                filter: {
                    date: []
                },
            }
        },
        methods: {
            getCurrentDate(){
                let mounthAgo = new Date();
                mounthAgo.setMonth(mounthAgo.getMonth() - 1);
                mounthAgo = formatDate(mounthAgo) + ' 00:00:10';
                let currentDate = formatDate(new Date()) + ' 23:59:59';
                return [mounthAgo, currentDate];
            },
            getList() {
                  axios.get('/admin_api/v1/users/by_time',{
                      params: {
                          'startDate': this.filter.date ? this.filter.date[0] : '',
                          'endDate': this.filter.date ? this.filter.date[1] : ''
                      }
                  })
                  .then(response => {
                      let existTime = [];
                      let timeToRender =[];

                      for(let user of response.data.users) {
                          let time = user.created_at.split(' ')[0];

                          if (!existTime.includes(time)) {
                              let chartObject = {
                                  y: 1,
                                  t: Date.parse(time)
                              };
                              existTime.push(time);
                              timeToRender.push(chartObject);

                          }else {
                              let index = existTime.indexOf(time);
                              let chartObject = timeToRender[index];
                              chartObject.y++
                          }
                      }
                      this.chart.config.data.datasets[0].data = timeToRender;
                      this.chart.config.labels = existTime;
                      this.chart.update();
                      this.$emit('load');
                  }).catch((err) => {
                    console.log(err)
              });
          }
        },
        created() {
            this.filter.date = this.getCurrentDate();
            this.getList();
        },
        mounted() {
            this.chart = new Chart(this.$el, {
                type: 'line',
                labels: [],
                data:  {
                    datasets: [{
                        label: 'Last registration users',
                        backgroundColor: 'rgba(255,99,132,1)',
                        borderColor: 'rgba(255,99,132,1)',
                        data: [],
                        type: 'line',
                        pointRadius: 3,
                        fill: false,
                        lineTension: 0,
                        borderWidth: 2
                    }]
                },
                options: {
                    aspectRatio: 0.5,
                    animation: {
                        animateRotate: true,
                        animateScale: false
                    },
                    scales: {
                        xAxes: [{
                            type: 'time',
                            distribution: 'linear',
                            display: true,
                            time: {
                                displayFormats: {
                                    quarter: 'YYYY-MMM-D'
                                }
                            }
                        }]
                    }
                }
            });
        }

    }
</script>

<style scoped>

</style>