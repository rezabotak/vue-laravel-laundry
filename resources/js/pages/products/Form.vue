<template>
  <div>
    <div class="form-group" :class="{ 'has-error': errors.name }">
      <label for>Nama Item</label>
      <input type="text" class="form-control" v-model="product.name" placeholder="Kemeja" />
      <p class="text-danger" v-if="errors.name">{{ errors.name[0] }}</p>
    </div>
    <div class="form-group" :class="{ 'has-error': errors.unit_type }">
      <label for>Tipe</label>
      <select v-model="product.unit_type" class="form-control">
        <option value>Pilih</option>
        <option value="Kilogram">Kilogram</option>
        <option value="Potong">Potong</option>
      </select>
      <p class="text-danger" v-if="errors.unit_type">{{ errors.unit_type[0] }}</p>
    </div>
    <div class="row">
      <div class="col-md-6">
        <!-- KETIKA TOMBOL ADD NEW DITEKAN -->
        <div class="form-group" :class="{ 'has-error': errors.laundry_type }">
          <label for>
            Jenis Jasa
            <sup>
              <a @click="showForm = true" href="javascript:void(0)" v-if="!showForm">Add New</a>
            </sup>
          </label>
          <select v-model="product.laundry_type" class="form-control">
            <option value>Pilih</option>
            <option
              v-for="(row, index) in laundry_types"
              :key="index"
              :value="row.id"
            >{{ row.name }}</option>
          </select>
          <p class="text-danger" v-if="errors.laundry_type">{{ errors.laundry_type[0] }}</p>
        </div>
      </div>

      <!-- MAKA FORM UNTUK MENAMBAHKAN JENIS LAUNDRY AKAN DITAMPILKAN -->
      <div class="col-md-6" v-if="showForm">
        <div class="form-group" :class="{ 'has-error': errors.name_laundry_type }">
          <label for>&nbsp;</label>
          <div class="input-group">
            <input
              type="text"
              placeholder="Cuci Kering + Setrika"
              v-model="laundry_type"
              class="form-control"
            />
            <a
              href="javascript:void(0)"
              class="input-group-addon btn btn-warning btn-sm"
              id="basic-addon2"
              @click="addNewLaundryType"
            >Save</a>
          </div>
          <p class="text-danger" v-if="errors.name_laundry_type">{{ errors.name_laundry_type[0] }}</p>
        </div>
      </div>
      <!-- END FORM ADD JENIS LAUNDRY -->
    </div>

    <div class="form-group" :class="{ 'has-error': errors.price }">
      <label for>Harga</label>
      <input type="number" class="form-control" v-model="product.price" />
      <p class="text-danger" v-if="errors.price">{{ errors.price[0] }}</p>
    </div>
  </div>
</template>