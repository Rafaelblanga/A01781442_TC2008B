using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class createballs : MonoBehaviour
{
// public GameObject ball;
    [SerializeField]GameObject ball;
    [SerializeField]float delay;
    // Start is called before the first frame update
    void Start()
    {
        InvokeRepeating("DropBall", 0.5f, delay);
    }

   

    void DropBall(){
        var position = new Vector3(Random.Range(-10.0f, 10.0f), 4, Random.Range(-10.0f, 10.0f));
       GameObject obj =  Instantiate(ball,position,Quaternion.identity);
       //Destroy(obj, 6.0f);


    }

    public void StopSpawning(){
        CancelInvoke("DropBall");
    }
}
