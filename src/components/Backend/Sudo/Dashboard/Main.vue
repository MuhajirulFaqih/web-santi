<template>
    <div>
        <b-row>
            <b-col cols="12" lg="4">
                 <div class="infographic default">
                    <h4>Pengajuan</h4>
                    <span>Semua</span>
                    <span class="total">150</span>
                </div>
            </b-col>
            <b-col cols="12" lg="4">
                 <div class="infographic warning">
                    <h4>Pengajuan</h4>
                    <span>Sedang diproses</span>
                    <span class="total">100</span>
                </div>
            </b-col>
            <b-col cols="12" lg="4">
                 <div class="infographic primary">
                    <h4>Pengajuan</h4>
                    <span>Selesai</span>
                    <span class="total">50</span>
                </div>
            </b-col>
        </b-row>
        <b-row class="w-100">
            <b-col cols="12">
                <div class="box">
                    <h3><b>Statistik pengajuan</b></h3>
                    <b-row>
                        <b-col cols="12 mt-4">
                            <lineChart :chartData="chartData" :options="chartOptions" :height="300" :width="1000" />
                        </b-col>
                    </b-row>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import LineChart from '@/components/Backend/Sudo/Dashboard/Chart.js'
    export default {
        name: 'sudo-dashboard',
        components: {
            LineChart
        },
        data () {
            return {
                chartOptions: {
                    responsive: true,
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            }   
                        }]
                    }   
                },
                chartData: {
                        labels: ['2020-09-05', '2020-09-06', '2020-09-07', '2020-09-08', '2020-09-09', '2020-09-10', '2020-09-11'],
                        datasets: [
                            {
                                pointBorderWidth: 3,
                                pointBackgroundColor: '#52BD76',    
                                borderColor: '#52BD76',
                                backgroundColor: 'rgb(255 255 255 / 0%)',
                                label: 'Statistik pengajuan',
                                data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                            }
                        ]
                    }
            }
        },
        watch: {
            chartData () {
                this.$data._chart.update()
            }
        }
    }
</script>