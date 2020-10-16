<template>
    <div class="feedback">
        <v-container>
            <v-row justify="center" align="center">
                <v-col sm="12" md="6" cols="12">
                    <v-card>
                        <v-card-title primary-title>
                            <v-container class="blue darken-4" rounded>
                                <span class="headline white--text font-weight-black text-center">NoSQL - Auswertung</span>
                            </v-container>
                        </v-card-title>
                        <v-card-text>
                            <h2>Frage</h2>
                                <p>{{ f+1 }}/6</p>
                        </v-card-text>
                        <v-divider></v-divider>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>